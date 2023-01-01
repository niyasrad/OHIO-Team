import test from '../../assets/image.png'
import garge from '../../assets/garge.jpg'
import raddo from '../../assets/raddo.jpg'
import kira from '../../assets/kira.jpeg'
import drock from '../../assets/drock.jpg'
import avgohio from '../../assets/avgohio.jpg'
import Beast from '../../assets/Beast.jpg'
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
    {name: "Rock", img: drock, post: "PARTNER"},
    {name: "Average", img: avgohio, post: "PARTNER"},
    {name: "Beast", img: Beast, post: "PARTNER"},
    {name: "Elo", img: test, post: "PARTNER"}
]