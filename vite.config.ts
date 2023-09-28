import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(( {command} ) => {
  const setting = {
    plugins: [react()],
    base: '',
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '$injectedColor: orange;'
    //     }
    //   }
    // }
  };

  if (command === 'build') setting.base = 'https://turovae.github.io/booking-rlw-tkts/';

  return setting;
});
