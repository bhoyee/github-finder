class Github {
    constructor() {
        this.client_id = '4a73e006166a66932d0d';
        this.client_secret = '60423130e734702ac834ffd31ed32282282d0c96';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'; //query string in url to format response
    }

   async getUser(user) {
        // fech user profile
        const profileResponse = await fetch
        (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        //fetch user repo
        const repoResponse = await fetch
        (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}& client_id=${this.client_id}&client_secret=${this.client_secret}`)

        
        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        //return objects
        return {
            profile,
            repos
        }
    }
}