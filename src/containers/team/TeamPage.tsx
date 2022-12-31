import React from "react";
import TeamCard from "../../components/teamcard/TeamCard";
import { teams } from "./data";
import './TeamPage.css';

function TeamPage() {
    return (
      <>
        <div className='team-screen'>
          <h1>Our Team</h1>
          <p>This, is our Precious team. Every person here is as valuable as one another, regardless of the role/position they hold.</p>
          <div className='team-cards'>
            {teams.map((team) =>(
                  <TeamCard img={team.img} post={team.post} name={team.name} />
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default TeamPage;
  