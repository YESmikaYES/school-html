import React from "react";
import "./style.css"

export default () => (
    <div id="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        <table className="table">
          <tr className="heading">
            <th className="heading">Element</th>
            <th className="heading">Warlock Subclass</th>
            <th className="heading">Titan Subclass</th>
            <th className="heading">Hunter Subclass</th>
          </tr>

          <tr className="solar">
            <td id="solar">Solar</td>
            <td>Dawnblade</td>
            <td>Sunbreaker</td>
            <td>Gunslinger</td>

          </tr>
          <tr className="arc">
            <td id="arc">Arc</td>
            <td>Stormcaller</td>
            <td>Striker</td>
            <td>Arcstrider</td>

          </tr>
          <tr className="void">
            <td id="void">Void</td>
            <td>Voidwalker</td>
            <td>Defender</td>
            <td>Nightstalker</td>

          </tr>
          <tr className="stasis">
            <td id="stasis">Stasis</td>
            <td>Shadebinder</td>
            <td>Behemoth</td>
            <td>Revenant</td>

          </tr>
          <tr className="strand">
            <td id="strand">Strand</td>
            <td>Broodweaver</td>
            <td>Berserker</td>
            <td>Threadrunner</td>

          </tr>
        </table>
    </div>
)