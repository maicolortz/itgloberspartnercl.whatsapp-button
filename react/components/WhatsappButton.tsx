import React from 'react';
import PropTypes from "prop-types";
type Props={
  logo:string
  phone:string
  message:string
  width:number //80px
  height:number //80px
}

const WhatsappButton =({logo,phone,message,width, height}: Props)=>{
const formattedMessage =message.replace(/ /g,"%20")
  console.log("mi mensaje formateado es ", formattedMessage, logo);
return <>
<div className='fixed bottom-2 right-2 flex flexColumn vtex-flex-layout-whatsapp-button'>
<a href={`https://wa.me/${phone}?text=${formattedMessage}`}
target="_blank"
rel='noreferrer noopener'

>
  <img src={logo} width={width} height={height} alt="logo de whatsapp"></img>
</a>
</div>

</>
}
WhatsappButton.propTypes={
logo:PropTypes.string.isRequired,
phone:PropTypes.string.isRequired,
message:PropTypes.string,
width:PropTypes.number,
height:PropTypes.number
}
WhatsappButton.defaultProps={
  logo:"mi-logo.png",
  phone:"234829034",
  message:"Estas comunicandote con vtex",
  width:80,
  height:80
}
WhatsappButton.schema = {
  title: 'Boton de WhatsApp',
  type: 'object',
  properties: {
    icon: {
      title: 'Logo de WhatsApp que se relacione con la marca',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Telefono',
      description: 'Agrega por favor un numero de telefono',
      type: 'string',
    },
    message: {
      title: 'Mensaje',
      description: 'Agrega por favor un mensaje que vea el cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'width',
      description: 'Agrega por favor un ancho',
      type: 'number'
    },
    height: {
      title: 'width',
      description: 'Agrega por favor un ancho',
      type: 'number'
    }
  },
}
export default WhatsappButton
