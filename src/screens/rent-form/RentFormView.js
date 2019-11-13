import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  ToastAndroid
} from 'react-native'
import { Title, Text, FAB, withTheme, TextInput } from 'react-native-paper'
import Dates from 'react-native-dates'
import moment from 'moment'
import AddToCart from '../../mutations/AddProductToCart'
import withEnvironment from '../../hocs/withEnvironment'
import withNavigator from '../../hocs/withNavigator'
import Validator from '../../utils/validator'
import Button from '../../common/Button'

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: null,
      focus: 'startDate',
      startDate: null,
      endDate: null,
      note: '',
      quantity: 1,
      deliveryAddress: props.address || '',
      isLoading: false,
      validation: { isValid: false }
    }
  }

  isValid = () => {
    const validator = new Validator([
      {
        field: 'deliveryAddress',
        method: Validator.isEmpty,
        validWhen: false,
        message: ''
      }
    ])

    const validation = validator.validate(this.state);
    this.setState({ validation })
    return validation.isValid
  }

  setNote = note => this.setState({ note })

  setDeliveryAddress = deliveryAddress => this.setState({ deliveryAddress })

  increaseQuantity = () => {
    const { quantity } = this.state
    if(quantity < this.props.availableItems)
      this.setState({ quantity: quantity + 1 })
  }

  decreaseQuantity = () => {
    const { quantity } = this.state
    if(quantity > 1)
      this.setState({ quantity: quantity - 1 })
  }

  isDateBlocked = (date) => date.isBefore(moment(), 'day')

  onDatesChange = ({ startDate, endDate, focusedInput }) =>
      this.setState({ ...this.state, focus: focusedInput }, () =>
        this.setState({ ...this.state, startDate, endDate })
      )

  addToCart = () => {
    const { productID, environment, goBack } = this.props
    const { startDate, endDate, quantity, note, deliveryAddress } = this.state
    const duration = ToastAndroid.LONG

    if(!startDate) {
      ToastAndroid.show('Silahkan pilih tanggal peminjaman.', duration)
    } else {
      if(!this.state.isLoading && this.isValid()) {
        const _note = note.trim()
        const _startDate = startDate.format('YYYY-MM-DD')
        const _endDate = endDate ? endDate.format('YYYY-MM-DD') : _startDate
        const input = {
          productID,
          startDate: _startDate,
          endDate: _endDate,
          quantity,
          note: _note === '' ? null : _note,
          deliveryAddress
        }

        AddToCart(environment, { input }, (payload, err) => {
          if(err)
            ToastAndroid.show('Terjadi error.', duration)
          else {
            const { success, message } = payload.actionInfo
            if(success)
              goBack()

            ToastAndroid.show(message, duration)
          }

          this.setState({ isLoading: false })
        })

        this.setState({ isLoading: true })
      }
    }
  }

  render() {

    const { colors } = this.props.theme
    const { quantity, validation } = this.state
    return (
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
      >
        <View style={s.container}>
          <Title style={s.title}>Tanggal Peminjaman</Title>
          <View style={s.datesContainer}>
            <Dates
              onDatesChange={this.onDatesChange}
              isDateBlocked={this.isDateBlocked}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              focusedInput={this.state.focus}
              focusedMonth={ moment('05/09/2030','DD/MM/YYYY')}
              range
            />
          </View>

          {this.props.availableItems > 1 &&
          <>
            <Title style={s.title}>Jumlah Barang</Title>

            <View style={s.quantityContainer}>
              <View style={{ backgroundColor: 'transparent'}}>
              <FAB
                style={[s.fab, { backgroundColor: colors.primary }]}
                small
                icon="remove"
                onPress={this.decreaseQuantity}
              />
              </View>
              <Text style={s.quantityText}>{quantity}</Text>
              <View>
              <FAB
                style={[s.fab, { backgroundColor: colors.primary }]}
                small
                icon="add"
                onPress={this.increaseQuantity}
              />
              </View>
            </View>
          </>
          }

          <View style={s.withPadding}>
            <TextInput
              label='Alamat Pengiriman'
              value={this.state.deliveryAddress}
              onChangeText={this.setDeliveryAddress}
              mode="outlined"
              error={validation.deliveryAddress && validation.deliveryAddress.isInvalid}
              multiline
            />
            
            <TextInput
              label='Catatan'
              value={this.state.note}
              onChangeText={this.setNote}
              mode="outlined"
              multiline
            />

            <Button
              style={s.button}
              onPress={this.addToCart}
            >
              Tambahkan ke keranjang
            </Button>
          </View>

        </View>
      </ScrollView>
    )
  }
}

export default withNavigator(withEnvironment(withTheme(Component)))

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 15,
    paddingBottom: 15
  },
  date: {
    marginTop: 50
  },
  focused: {
    color: 'blue'
  },
  title: {
    marginLeft: 15,
  },

  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  quantityText: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 24
  },
  fab: {
    elevation: 2,
    backgroundColor: 'red'
  },

  withPadding: {
    paddingLeft: 20,
    paddingRight: 20
  },

  button: {
    marginTop: 20
  },

  datesContainer: {
    marginBottom: 10
  }
})