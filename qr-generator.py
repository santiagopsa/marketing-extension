import qrcode

url = "https://main.d1mh7qabvsmduh.amplifyapp.com/es"

# Crear el QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

# Generar la imagen en blanco y negro
img = qr.make_image(fill_color="black", back_color="white")
img.save("qr_code.png")

# Opcional: Mostrar en consola como ASCII art (en blanco y negro textual)
qr.print_ascii()