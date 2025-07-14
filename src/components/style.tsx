import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const BackgroundLayout = styled(Box)(({  }) => ({
  position: 'relative', // ensure it doesn't block fixed elements
  zIndex: 0,
  minHeight: '100vh',
  backgroundImage: "url('/herobg.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
}));