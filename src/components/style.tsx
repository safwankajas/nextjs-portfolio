import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const BackgroundLayout = styled(Box)(({  }) => ({
  minHeight: '100vh',
  backgroundImage: "url('/herobg.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));