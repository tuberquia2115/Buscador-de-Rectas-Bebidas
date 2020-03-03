import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { ModalContext } from '../../context/modalContext'

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({ receta }) => {
    //configuración del modal de material-ui
    const [open, setOpen] = useState(false);
    const { informacionReceta, guardarIdreceta, guardarInformaciónReceta } = useContext(ModalContext)
    const { strDrink, strDrinkThumb, idDrink } = receta;
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const mostrarIngredientes = informacion => {
        let ingredientes = []
        for (let i = 1; i < 16; i++) {
            if (informacion[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{informacion[`strIngredient${i}`]}  {informacion[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{strDrink}</h2>


                <img className="card-img-top" src={strDrinkThumb} alt={`Imagen de ${strDrink}`} />
                <div className="card-body">
                    <button
                        onClick={() => {
                            guardarIdreceta(idDrink);
                            guardarInformaciónReceta({})
                            handleOpen();
                        }}
                        type="button"
                        className="btn btn-block btn-primary"
                    >
                        Ver receta
                    </button>
                    <Modal
                        className={classes.modal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                            title: 'hola'
                        }}
                        open={open}
                        onClose={() => {
                            handleClose()
                            guardarIdreceta(null)
                        }}>
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <h2>{informacionReceta.strDrink}</h2>

                                <h3 className="mt-4">{"Instrucciones"}</h3>
                                <p>
                                    {informacionReceta.strInstructions}
                                </p>

                                <img style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                                    className="img-fluid my-4"
                                    src={informacionReceta.strDrinkThumb}
                                    alt=""
                                />

                                <h3>Ingredientes y cantidades</h3>
                                {mostrarIngredientes(informacionReceta)}
                            </div>
                        </Fade>

                    </Modal>

                </div>
            </div>

        </div>
    )
}
export default Receta;