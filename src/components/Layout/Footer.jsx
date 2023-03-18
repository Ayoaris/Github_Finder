import React from 'react'

function Footer() {
    const footerYEAR = new Date().getFullYear()
  return (
      <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
          <div>
              <p>Copyright &copy;{ footerYEAR} All right reserved </p>
          </div>
    </footer>
  )
}

export default Footer