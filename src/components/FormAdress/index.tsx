import React, { useContext } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"

import schema from "./schema"
import * as S from './styles'
import { StepperContext, SteeperContextType } from "../../contexts/Stepper";

export default function FormAdress(){
    const { setStepLevel, stepLevel, setFormAdress } = useContext<SteeperContextType>(StepperContext);

    function onSubmit(values: any, actions: any){
        setStepLevel(stepLevel+1)
        setFormAdress(values)
    }

    return(
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                adress: '',
                state: '',
                city: '',
                zip: '',
                phone: ''
            }}
            onSubmit={onSubmit}
            validationSchema={schema}
        >
            { ({values, errors, touched, isValid}) => (
                <S.Container>
                    <Form>
                        <h3>Billing Adress</h3>
                        <S.ContainerPair>
                            <S.ContainerIndividual>
                                <label>First Name</label>
                                <Field name='firstName' className="field" />
                                <ErrorMessage name="firstName" className="error" />
                            </S.ContainerIndividual>
                            <S.ContainerIndividual>
                                <label>Last Name</label>
                                <Field name='lastName' className="field" /> 
                                <ErrorMessage name="lastName" className="error" />
                            </S.ContainerIndividual>
                        </S.ContainerPair>
                        <S.ContainerIndividual>
                            <label>Email</label>
                            <Field name="email" type="email" className="field" />
                            <ErrorMessage name="email" className="error" />
                        </S.ContainerIndividual>
                        <S.ContainerIndividual>
                            <label>Street Adress</label>
                            <Field name='adress' className="field" />
                            <ErrorMessage name="adress" className="error" />
                        </S.ContainerIndividual>
                        <S.ContainerPair>
                            <S.ContainerIndividual>
                                <label>State/Province</label>
                                <Field name="state" component="select" className="field" >
                                    <option value={''}>Select</option>
                                    <option value={'sp'}>São Paulo</option>
                                    <option value={'rj'}>Rio de Janeiro</option>
                                    <option value={'mg'}>Minas Gerais</option>
                                </Field>
                                <ErrorMessage name="state" className="error" />
                            </S.ContainerIndividual>
                            <S.ContainerIndividual>
                                <label>City</label>
                                <Field name="city" component="select" className="field" >
                                    <option value={''}>Select</option>
                                    <option value={'sao_paulo'}>São Paulo</option>
                                    <option value={'rio_de_janeiro'}>Rio de Janeiro</option>
                                    <option value={'ouro_preto'}>Ouro Preto</option>
                                </Field>
                                <ErrorMessage name="city" className="error" />
                            </S.ContainerIndividual>
                        </S.ContainerPair>
                        <S.ContainerIndividual>
                            <label>
                                <Field type="checkbox" name="adressBilling" value="adress_billing" />
                                My billing and shipping adress are the same
                            </label>
                            <label>
                                <Field type="checkbox" name="createAccount" value="create_account" />
                                Create an account for 10% off this purchase
                            </label>
                        </S.ContainerIndividual>
                        

                        <button type="submit">Next</button>
                    </Form>
                </S.Container>
                
            )}
            
        </Formik>
    )
}