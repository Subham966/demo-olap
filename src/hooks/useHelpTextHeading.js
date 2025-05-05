import { useSelector } from 'react-redux';

const useHelpTextHeading = () => {
  const centerDetails = useSelector((state) => state.centerDetails);
  return `Please contact us on ${centerDetails?.public_number} during business hours.`;
};

export default useHelpTextHeading;