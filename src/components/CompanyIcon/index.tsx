type Icon = {
  icon: string
}

const CompanyIcon = ({ icon }: Icon) => {
  return <img src={icon} alt="company-icon-svg" className="company-icon" />
}

export default CompanyIcon
