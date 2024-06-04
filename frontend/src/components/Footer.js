import React from 'react'

const Footer = () => {
  return (
    <>
      <footer style={footerStyle}>
            <div className="container">
                 <div className="row text-center">
                     <div className="col-md-12 col-lg-12 col-sm-12">
                        <p>&copy; 2024 The Future Power . All Rights Reserved.</p>       
                    </div>
                </div>
            </div>
       </footer>
    </>
  )
}

export default Footer

const footerStyle = {
  backgroundColor: "rgba(0, 0, 0, 0)",
  color: 'black',
  textAlign: 'center',
  padding: '0px',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  fontSize: '20px',
  fontWeight: 'bold',
  fontFamily: 'Poppins',
};