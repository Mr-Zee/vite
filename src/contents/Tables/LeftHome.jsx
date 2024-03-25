import PropTypes from 'prop-types';
import "./scroll.css";

const LeftHome = ({ data }) => {
  const handleRowClick = () => {
    return "/leads";
  };
  return (
    <div className="bg-white/60 rounded-lg shadow-md p-4 h-full custom-scrollbar " >
      <div className="container flex justify-center bg-yellow-300/80 py-2 rounded-lg">
              <h2 className="font-medium text-black ">Latest Transaction</h2>
            </div>
      <ul className="overflow-y-auto h-screen-80 mt-3">
        {data.map((lead, index) => (
          <li className="flex justify-between p-2 hover:bg-yellow-200 cursor-pointer rounded-lg" key={index}
          onClick={() => {
            const redirectUrl = validateAndHandleRedirectUrl(
              handleRowClick(lead)
            );
            if (redirectUrl) {
              window.location.href = redirectUrl;
            }
          }}>
            <p>{lead.Leads}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

LeftHome.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Leads: PropTypes.string.isRequired,  
      
    })
  ).isRequired,
};

function validateAndHandleRedirectUrl(redirectUrl) {
  if (!redirectUrl || typeof redirectUrl !== "string") {
    console.warn(
      "Invalid redirect URL provided. Please return a valid string."
    );
    return null;
  }
  return redirectUrl;
}

export default LeftHome;
