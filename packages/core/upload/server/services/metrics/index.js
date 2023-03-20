'use strict';

const getProviderName = () => strapi.config.get('plugin.upload.provider', 'local');
const getProviderIsPrivate = () => strapi.plugin('upload').provider.isPrivate();

module.exports = ({ strapi }) => ({
  async sendUploadPluginMetrics() {
    const provider = getProviderName();
    const isPrivate = await getProviderIsPrivate();

    strapi.telemetry.send('didInitializePluginUpload', {
      groupProperties: {
        uploadProvider: provider,
        isUploadPrivateProvider: isPrivate,
      },
    });
  },
});
