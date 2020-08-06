import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem'

import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                <Select 
                    name = "subject" 
                    label = "Matéria" 
                    options={[
                        {value: 'Artes', label: 'Artes'},
                        {value: 'Português', label: 'Português'},
                        {value: 'Redação', label: 'Redação'},
                        {value: 'Matemática', label: 'Matemática'},
                        {value: 'Física', label: 'Física'},
                        {value: 'História', label: 'História'},
                        {value: 'Geografia', label: 'Geografia'},
                        {value: 'Sociologia', label: 'Sociologia'},
                        {value: 'Filosofia', label: 'Filosofia'},
                        {value: 'Biologia', label: 'Biologia'},
                        {value: 'Química', label: 'Química'},
                        {value: 'Inglês', label: 'Inglês'},
                        {value: 'Espanhol', label: 'Espanhol'},
                        {value: 'Educação Física', label: 'Educação Física'},
                    ]}
                   />
                   <Select 
                    name = "week_day" 
                    label = "Dia da Semana"
                    options={[
                        {value: '0', label: 'Domingo'},
                        {value: '1', label: 'Segunda-feira'},
                        {value: '2', label: 'Terça-feira'},
                        {value: '3', label: 'Quarta-feira'},
                        {value: '4', label: 'Quinta-feira'},
                        {value: '5', label: 'Sexta-feira'},
                        {value: '6', label: 'Sábado'},
                        {value: '7', label: 'Domingo'},
                    ]}
                   />
                    <Input type= "time" name = "time" label = "Hora" />
                </form> 
            </PageHeader> 
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;