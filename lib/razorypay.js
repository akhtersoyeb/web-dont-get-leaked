export const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.id = 'razorpay-script'; // Add an ID to easily find the script later
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const unmountRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.getElementById('razorpay-script');
    if (script) {
      // Remove the script from the document
      script.remove();
      
      // Clean up any global Razorpay instances
      if (window.Razorpay) {
        window.Razorpay = undefined;
      }
      
      resolve(true);
    } else {
      resolve(false);
    }
  });
};