import React from "react";
import axios from 'axios'



   const Formulario =()=> {
    return (
      <form className="form-principal" action="" method="POST" id="form">
      <section className="form-section">
        <h3 className="h3">Formulario</h3>



        <div className="row">
        <section className="grupo col-4">

          <select class="form-select" id ="Default select example">
                <option  >Tipo de documento</option>
                
                <option value="1">Cédula de extranjería</option>
                <option value="3">Tarjeta de extrajería</option>
                <option value="2">Cédula de ciudadanía</option>
                <option value="3">Tarjeta de identidad</option>
                <option value="3">NIT</option>
              </select>
        </section>
        <section className=" grupo col-4">
          <input type="text" name="" id="number" />
          <span className="barra"></span>
          <label for="">Numero Documento</label>
        </section>
        </div>








         <div className="row">
          <section className="grupo col-4">
          <input type="text" name="" id="name" />
          <span className="barra"></span>
          <label for="">Nombres</label>
        </section>
        <section className="grupo col-4">
          <input type="text" name="" id="name" />
          <span className="barra"></span>
          <label for="">Apellidos</label>
        </section>
        </div>



        <div className="row">
        <section className="grupo col-4">
          <input type="date" name="" id="date" />
          <span className="barra"></span>
          <label for="">Fecha Nacimiento</label>
        </section>
        <section className="grupo col-4">
          <input type="text" name="" id="name" />
          <span className="barra"></span>
          <label for="">Direccion</label>
        </section>
        </div>


         <div className="row">
        <section className="grupo col-4">
       <select id="inputCity" className="form-select">
                <option selected>Ciudad</option>
                <option value="">Armenia</option>
                <option value="">Barrancabermeja</option>
                <option value="">Barranquilla</option>
                <option value="">Bogotá</option>
                <option value="">Bucaramanga</option>
                <option value="">Buga</option>
                <option value="">Cali</option>
                <option value="">Cartagena</option>
                <option value="">Chía</option>
                <option value="">Cúcuta</option>
                <option value="">Duitama</option>
                <option value="">Florencia</option>
                <option value="">Fusagasugá</option>
                <option value="">Girardot</option>
                <option value="">Honda</option>
                <option value="">Ibagué</option>
                <option value="">Ipiales</option>
                <option value="">Jamundí</option>
                <option value="">Leticia</option>
                <option value="">Manizales</option>
                <option value="">Mariquita</option>
                <option value="">Medellín</option>
                <option value="">Mompox</option>
                <option value="">Montería</option>
                <option value="">Murillo</option>
                <option value="">Neiva</option>
                <option value="">Pamplona</option>
                <option value="">Pasto</option>
                <option value="">Pereira</option>
                <option value="">Popayán</option>
                <option value="">Riohacha</option>
                <option value="">San Andrés y Providencia</option>
                <option value="">San Antero</option>
                <option value="">Santa Marta</option>
                <option value="">Santafé de Antioquia</option>
                <option value="">Sevilla</option>
                <option value="">Sincelejo</option>
                <option value="">Sogamoso</option>
                <option value="">Tabio</option>
                <option value="">Tocancipá</option>
                <option value="">Tolú</option>
                <option value="">Tuluá</option>
                <option value="">Tumaco</option>
                <option value="">Tunja</option>
                <option value="">Valledupar</option>
                <option value="">Villavicencio</option>
                <option value="">Yopal</option>
                <option value="">Zipaquirá</option>
              </select>
        </section>
        <section className="grupo col-4">
        <select id="inputState" class="form-select">
        <option selecte>Departamento</option>
        <option  value="1">Amazonas</option>
                <option  value="2">Antioquia</option>
                <option  value="3">Arauca</option>
                <option  value="4">Atlántico</option>
                <option  value="5">Bogotá</option>
                <option  value="6">Bolívar</option>
                <option  value="7">Boyacá</option>
                <option  value="8">Caldas</option>
                <option  value="9">Caquetá</option>
                <option  value="10">Casanare</option>
                <option  value="11">Cauca</option>
                <option  value="12">Cesar</option>
                <option  value="13">Chocó</option>
                <option  value="14">Córdoba</option>
                <option  value="15">Cundinamarca</option>
                <option  value="16">Guainía</option>
                <option  value="17">Guaviare</option>
                <option  value="18">Huila</option>
                <option  value="19">La Guajira</option>
                <option  value="20">Magdalena</option>
                <option  value="21">Meta</option>
                <option  value="22">Nariño</option>
                <option  value="23">Norte de Santander</option>
                <option  value="24">Putumayo</option>
                <option  value="25">Quindío</option>
                <option  value="26">Risaralda</option>
                <option  value="27">San Andrés y Providencia</option>
                <option  value="28">Santander</option>
                <option  value="29">Sucre</option>
                <option  value="30">Tolima</option>
                <option  value="31">Valle del Cauca</option>
                <option  value="32">Vaupés</option>
                <option  value="33">Vichada</option>
                </select>
        </section>

        </div>

        <div className="row">
        <section className="grupo col-4">
          <input type="text" name="" id="name" />
          <span className="barra"></span>
          <label for="">Pais</label>
          <select id="inputState" class="form-select">
                <option selected>País</option>
                <option value="1">Afganistán</option>
                <option value="2">Albania</option>
                <option value="3">Alemania</option>
                <option value="4">Andorra</option>
                <option value="5">Angola</option>
                <option value="6">Antigua y Barbuda</option>
                <option value="7">Arabia Saudita</option>
                <option value="8">Argelia</option>
                <option value="9">Argentina</option>
                <option value="10">Armenia</option>
                <option value="11">Australia</option>
                <option value="12">Austria</option>
                <option value="13">Azerbaiyán</option>
                <option value="14">Bahamas</option>
                <option value="15">Bahrein</option>
                <option value="16">Bangladesh</option>
                <option value="17">Barbados</option>
                <option value="18">Belarús</option>
                <option value="19">Bélgica</option>
                <option value="20">Belice</option>
                <option value="21">Bhután</option>
                <option value="22">Bolivia (Estado Plurinacional de)</option>
                <option value="23">Bosnia y Herzegovina</option>
                <option value="24">Botswana</option>
                <option value="25">Brasil </option>
                <option value="26">Brunei Darussalam</option>
                <option value="27">Bulgaria</option>
                <option value="28">Burkina Faso</option>
                <option value="29">Burundi</option>
                <option value="30">Cabo Verde</option>
                <option value="31">Camboya</option>
                <option value="32">Camerún</option>
                <option value="33">Canadá</option>
                <option value="34">Chad </option>
                <option value="35">Chequia</option>
                <option value="36">Chile</option>
                <option value="37">China</option>
                <option value="38">Chipre</option>
                <option value="39">Colombia</option>
                <option value="40">Comoras</option>
                <option value="41">Congo </option>
                <option value="42">Costa Rica</option>
                <option value="43">Côte d’Ivoire</option>
                <option value="44">Croacia</option>
                <option value="45">Cuba</option>
                <option value="46">Dinamarca</option>
                <option value="47">Djibouti</option>
                <option value="48">Dominica</option>
                <option value="49">Ecuador </option>
                <option value="50">Egipto</option>
                <option value="51">El Salvador</option>
                <option value="52">Emiratos Árabes Unidos</option>
                <option value="53">Eritrea</option>
                <option value="54">Eslovaquia</option>
                <option value="55">Eslovenia</option>
                <option value="56">España</option>
                <option value="57">Estados Unidos de América</option>
                <option value="58">Filipinas</option>
                <option value="59">Finlandia</option>
                <option value="60">Francia</option>
              </select>
        </section>
        <section className="grupo col-4">
          <input type="text" name="" id="name" />
          <span className="barra"></span>
          <label for="">Marca</label>
        </section>
        </div>




        <imput type="submit" value="Registar" />
        <imput type="reset" value="Eliminar" />

        <button className="boton" type="submit">
          <span>Enviar</span>
        </button>
        <p className="warnings" id="warnings"></p>
      </section>
    </form>
        
)}
export {
  Formulario
}
