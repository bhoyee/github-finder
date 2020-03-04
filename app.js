 //init github class
 const github = new Github;
 // init UI class
 const ui = new UI;


//Search input
const searchUser = document.getElementById('searchUser');

// search Input event listener
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userTest = e.target.value;

    if(userTest !== '') {
       // Mak http call 
        github.getUser(userTest)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // Show alart
                    ui.showAlert('User not found', 'alert alert-danger');

                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        ui.clearProfile();
        // clear profile
    }
});