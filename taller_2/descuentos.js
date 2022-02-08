//definiendo el array de cupones
const coupons = [
    {
      name: "Al3x1a16",
      discount: 15,
    },
    {
      name: "emm4nu3l23",
      discount: 30,
    },
    {
      name: "44ron",
      discount: 25,
    },
  ];
  //Calcuando el descuento
  function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  //funcion callback
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
  
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const inputResult = document.getElementById("ResultP");
  
    //el cupon es valido
    const isCouponValueValid = function (coupon) {
      return coupon.name === couponValue;
    };
  
    //el cupon existe?
    const userCoupon = coupons.find(isCouponValueValid);
  
    if (!userCoupon) {
      inputResult.innerText = `El cupón no es valido, por lo tanto el precio final es %${priceValue} pesos`;
    } else {
      const descuento = userCoupon.discount;
      const precioConDescuento = calcularPrecioConDescuento(
        priceValue,
        descuento
      );
  
      inputResult.innerText = `El precio final es $${precioConDescuento} pesos`
    }
  }
  