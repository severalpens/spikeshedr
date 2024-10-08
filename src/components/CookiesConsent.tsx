
function CookiesConsent() {

  return (
    <div id="CookiesConsentsDiv" className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white text-center py-4 px-6 flex justify-between items-center">
    <p className="text-sm">This website may collect data and use cookies to enhance the user experience.</p>
    <button id="AcceptCookiesButton"
        onClick={() => {
          localStorage.setItem('consentGiven', 'true');
        }} 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Accept
    </button>
</div>
 );
}

export default CookiesConsent;