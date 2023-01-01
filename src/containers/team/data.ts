import test from '../../assets/image.png'
import garge from '../../assets/garge.jpg'
import raddo from '../../assets/raddo.jpg'
import kira from '../../assets/kira.jpeg'
interface Team{
    name: string;
    img: string;
    post: string;
}

export const teams: Array<Team> = [
    {name: "Raddoman", img: raddo, post: "CEO"},
    {name: "Mr. OHIO", img: test, post: "CTO"},
    {name: "Mikelle", img: garge, post: "TECH LEAD"},
    {name: "Lorem Ipsum", img: kira, post: "MANAGER"},
    {name: "Mikelle", img: test, post: "PARTNER"},
    {name: "6000", img: test, post: "PARTNER"},
    {name: "Mikelle", img: test, post: "PARTNER"},
    {name: "6000", img: test, post: "PARTNER"}
]