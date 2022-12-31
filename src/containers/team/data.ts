import test from '../../assets/image.png'

interface Team{
    name: string;
    img: string;
    post: string;
}

export const teams: Array<Team> = [
    {name: "Raddoman", img: test, post: "CEO"},
    {name: "Mr. OHIO", img: test, post: "CTO"},
    {name: "Mikelle", img: test, post: "TECH LEAD"},
    {name: "Lorem Ipsum", img: test, post: "MANAGER"},
    {name: "Mikelle", img: test, post: "PARTNER"},
    {name: "6000", img: test, post: "PARTNER"}
]