import React from 'react'

const Test = () => {
    var element = document.querySelector('[src="https://widget.trustmary.com/uT0iB91Zs"]');
    var widgetElement = document.createElement('div');

    function render() {
      window.TrustmaryEmbed.widgetTemplates["full-quota-widget"](widgetElement, widgetData);
      element.remove();
      tmary('widgetReady', { element: widgetElement, widgetData });
    }

    if(document.head.contains(element)) {
      document.addEventListener('DOMContentLoaded', function() {
        document.body.appendChild(widgetElement);
        render();
      });
    } else {
      element.parentElement.insertBefore(widgetElement, element);
      render();
  return (
    <div>render()</div>
  )
}
}

export default Test