import { ProgressBar } from 'react-loader-spinner';
import { Box } from 'components/Box';

export const Loader = () => {
  return (
    <Box display="flex" justifyContent="center">
      <ProgressBar
        height="60"
        width="60"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#4b4b4b"
        barColor="#304498"
      />
    </Box>
  );
};
