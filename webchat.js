$(document).ready(function initializeChat() {
  let chatConfig = {
    webchatAppUrl: "https://apps.mypurecloud.ie/webchat",
    webchatServiceUrl: "https://realtime.mypurecloud.ie:443",
    orgId: "8044",
    orgName: "atea1",
    queueName: "TEST_RnD",
    logLevel: "DEBUG",
    locale: "en",
    reconnectEnabled: true,
    reconnectOrigins: ['https://krismrp.github.io/purecloud-chat-demo/'],
    data: {
      firstName: "Henry",
      lastName: "Pacciani",
    },
    companyLogo: {
      width: 600,
      height: 149,
      url:
        "https://d3a63qt71m2kua.cloudfront.net/developer-tools/889/assets/images/PC-blue-nomark.png"
    },
    companyLogoSmall: {
      width: 25,
      height: 25,
      url:
        "https://d3a63qt71m2kua.cloudfront.net/developer-tools/889/assets/images/companylogo.png"
    },
    agentAvatar: {
      width: 462,
      height: 462,
      url:
        "https://d3a63qt71m2kua.cloudfront.net/developer-tools/889/assets/images/agent.jpg"
    },
    welcomeMessage: "Thanks for chatting using the dev tools chat page.",
    cssClass: "webchat-frame",
    css: {
      width: "100%",
      height: "100%"
    }
  };

  var chatButton = document.getElementById("chat-button");

  // Required if reconnects are enabled
  window.PURECLOUD_WEBCHAT_FRAME_CONFIG = {
    containerEl: "chat-container"
  };

  ININ.webchat
    .create(chatConfig)
    .then(function(webchat) {
      // Optionally use isAutoJoined if reconnects are enabled
      if (webchat.isAutoJoined()) {
        // Do something to disable chat button
      }

      chatButton.onclick = function() {
        var firstName = document.getElementById("first-name").value;
        var lastName = document.getElementById("last-name").value;

        // Use getConfig.setConfigProperty() for any web chat configuration property to dynamically set config values.
        webchat.getConfig().setData({
          firstName: firstName,
          lastName: lastName,
        });

        // Alternatively, call webchat.renderPopup here. Note that reconnects do not apply to popup chat.
        webchat.renderFrame({
          containerEl: "chat-container"
        });
      };
    })
    .catch(function(err) {
      console.log(err);
    });
});
