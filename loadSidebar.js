//document.addEventListener('DOMContentLoaded', () => {
    //fetch('/sidebar.html')
       // .then(response => {
       //     if (!response.ok) {
       //         throw new Error('Network response was not ok');
       //     }
       //     return response.text();
       // })
       // .then(data => {
       //     document.getElementById('sidebar-container').innerHTML = data;
        //})
       // .catch(error => console.error('Error loading sidebar:', error));
//});
// Define the loadSidebar function globally
window.loadSidebar = function(sidebarFile) {
    fetch(sidebarFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading sidebar:', error));
};

document.addEventListener('DOMContentLoaded', () => {
    loadSidebar('/sidebar1.html'); // Load the initial sidebar page
});
