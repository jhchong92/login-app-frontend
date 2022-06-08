import { ErrorObject } from '@vuelidate/core';
import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  app.config.globalProperties.$filters = {
    computeFormErrorMessage: (errors: ErrorObject[]) => {
      if (!errors) {
        return null;
      }
      if (errors.length == 0) {
        return null;
      }
      return errors[0].$message;
    },
  };
});
