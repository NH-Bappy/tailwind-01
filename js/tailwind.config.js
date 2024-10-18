tailwind.config = {
    theme: {
    extend: { 
        maxWidth: {
        container: '1320px',
        bannercontainer:'950px',
        servicecontainerh2: '492px',
        servicecontainerp: '609px',
        workcontainerone: '1020px',
        workcontainer: '374px',
        Agenccontainer: '802px'
    },
        colors: {
        btncolor: '#6A4DF4',
        btncolortow: 'hsla(250, 88%, 63%, 0.479)',
        bgscolor: '#E0FFF9',
        bgspcolor: '#151515',
        bgsp2color: '#737373',
        overlyBanner: 'rgba(0, 0, 0, 0.719)',
        lightcolor: '#FA6444',
        clinthovercolor: '#F4EFEF',
        singbgColor: '#DCDCDC'
        },
        fontFamily: {
            Inter: ["Inter"],

        },
        backgroundImage: {
            bannerImage: "url('./image/bannerimage.png')",
            lightImage: "url('./image/group 41.png')"
        },
        fontSize: {
        bannerH1:'75px',
        serviceH2:'45px'
        },
        lineHeight: {
            bH1: '1.2',
            
        }
    }
    }
}