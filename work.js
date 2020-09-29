var app5 = new Vue({
    el: '#app-5',
    data: {
        clients: [
            'client' => [
                'programScenerio' => [
                    'id' => 'ucclientPage_panelProposal_ucProposalInfo_cboProgramScenario',
                    'options' => [
                        {
                            value: "1",
                            text: "Basic Proposal",
                        },
                        ...
                        ]
                ]
            ]
            ]
    },
methods: {
    reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
    }
}
  })
