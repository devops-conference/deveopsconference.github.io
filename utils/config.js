const site = {

    title: 'DevOps Conference',
    logo: '/static/img/logos/e.png',
    dateEventDetail: '17 de Agosto!',
    dateEventStart: '08/17/2019 08:00:00',
    dateEventFinish: '08/17/2019 18:30:00',
    dateRegistrationStart: '06/17/2019',
    dateRegistrationFinish: '08/17/2019',
    menu: {
        logos: {
            initial: '/static/img/logos/e.png',
            scrolling: '/static/img/logos/e.png',
        }
    },
    about: {
        title: 'Sobre o DevOps Conference',
    },
    hashTag: 'devopscf',
    footer: {
        socialsNetwork: [
            { name: 'github', icon: '/static/img/icons/github_white.png', url: 'https://github.com/devops-conference' },
        ],
        copyrigth: '© Todos os direitos reservados, 2019.',
    },
    programacao: [
        {
            horario: '09:00 até 09:50',
            nome: 'O que é DevOps ? - Kevin Medeiros'
        },
        {
            horario: '09:50 até 10:40',
            nome: 'IaaC Infraestructure as a Code'
        },
        {
            horario: '10:40 até 11:30',
            nome: 'Docker e Kubernetes'
        },{
            horario: '12:00 até 13:30',
            nome: 'Almoço'
        },{
            horario: '13:30 até 14:20',
            nome: 'Kafka - Ramon Pereira'
        },{
            horario: '14:20 até 15:30',
            nome: 'Jekins - Aécio'
        },{
            horario: '15:30 até 16:00',
            nome: 'Coffee Break'
        },{
            horario: '16:00 até 16:50',
            nome: 'Cloud Native - Osmar Leão'
        },{
            horario: '17:00 até 18:00',
            nome: 'Mesa Redonda'
        }
    ]
}

export default site