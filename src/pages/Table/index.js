import React from "react";
import "./style.css"

export default () => (
    <div>
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
            <td id="solar" title="fire">Solar</td>
            <td title="born to nova forced to well">Dawnblade</td>
            <td title="bonk">Sunbreaker</td>
            <td title="golden gun go brrr">Gunslinger</td>

          </tr>
          <tr className="arc">
            <td id="arc" title="lightning">Arc</td>
            <td title="meme beam">Stormcaller</td>
            <td title="kys">Striker</td>
            <td title="reflectevery super">Arcstrider</td>

          </tr>
          <tr className="void">
            <td id="void" title="lean">Void</td>
            <td title="stupid purple magic go brr">Voidwalker</td>
            <td title="bubble is  stupid">Defender</td>
            <td title="invis is totally fair and balanced">Nightstalker</td>

          </tr>
          <tr className="stasis">
            <td id="stasis" title="ice">Stasis</td>
            <td title="why does everyone only care about stasis turrets">Shadebinder</td>
            <td title="a shadow of its former glory">Behemoth</td>
            <td title="rip shitterdive you wont be missed">Revenant</td>

          </tr>
          <tr className="strand">
            <td id="strand" title="strings">Strand</td>
            <td title="W O R M">Broodweaver</td>
            <td title="suspend has been nerfed LLLLL">Berserker</td>
            <td title="shitterdive but balanced PogU">Threadrunner</td>

          </tr>
        </table>
    </div>
)