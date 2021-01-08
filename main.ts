makerbit.onIrButton(IrButton.Number_8, IrButtonAction.Pressed, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
makerbit.connectIrReceiver(DigitalPin.P1, IrProtocol.NEC)
