const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <p className="text-center py-1 text-secondary">
      Copyright &copy; TinDev {year}
    </p>
  )
}

export default Footer
