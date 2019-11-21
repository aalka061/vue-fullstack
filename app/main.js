new Vue({
    el: '#app',
    data: {
        submissions: Seed.submissions
    }, 
    computed: {
        sortedSubmissions(){
            return this.submissions.sort((a,b) => {return b.votes - a.votes})
        }
    },
    methods: {
        upVote(subissionId){
            const submission = this.submissions.find(
                submission => submission.id == subissionId
            )
            submission.votes++
        }
    }
});