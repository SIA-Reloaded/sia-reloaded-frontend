<template>
    <div>
        <h2>Preguntas Obligatorias</h2>
        <FormulateForm v-model="obligatorias" @submit.prevent="handleSubmit">
            <FormulateInput type="textarea" name="298001" label="298001" validation="max:500|min:1"
            :validation-messages="{
                max: 'Tu retroalimentación es muy larga, máximo 500 caracteres',
                min: 'Por favor envía una retroalimentación'
                }"/>
            <FormulateInput type="radio" name="298002" label="298002" validation="required"
            :options="{1:'1', 2:'2', 3: '3', 4: '4', 5:'5'}"
            :validation-messages="{
                required: 'Por favor escoge una opción',
                }"/>
            <FormulateInput type="radio" name="298003" label="298003" validation="required"
            :options="{1:'1', 2:'2', 3: '3', 4: '4', 5:'5'}"
            :validation-messages="{
                required: 'Por favor escoge una opción',
                }"/>
            <FormulateInput type="radio" name="298004" label="298004" validation="required"
            :options="{1:'1', 2:'2', 3: '3', 4: '4', 5:'5'}"
            :validation-messages="{
                required: 'Por favor escoge una opción',
                }"/>
            <FormulateInput type="radio" name="298005" label="298005" validation="required"
            :options="{1:'1', 2:'2', 3: '3', 4: '4', 5:'5'}"
            :validation-messages="{
                required: 'Por favor escoge una opción',
                }"/>
            <FormulateInput type="radio" name="298006" label="298006" validation="required"
            :options="{1:'Si', 2:'No'}"
            :validation-messages="{
                required: 'Por favor escoge una opción',
                }"/>
            <FormulateInput type="radio" name="298007" label="298007" validation="required"
            :options="{1:'Si', 2:'No'}"
            :validation-messages="{
                required: 'Por favor escoge una opción',
                }"/>
            <FormulateInput type="radio" name="298008" label="298008" validation="required"
            :options="{1:'Si', 2:'No'}"
            :validation-messages="{
                required: 'Por favor escoge una opción',
                }"/>
            <FormulateInput type="checkbox" name="298009" label="298009"
            :options="{puntualidad:'Puntualidad', 
                    herramientas:'Uso apropiado de herramientas tecnológicas', 
                    pedagogia: 'Pedagogía', 
                    respeto: 'Respeto hacia los estudiantes', 
                    atencion:'Atención por fuera de clase', }"
            :validation-messages="{
                required: 'Por favor escoge una opción',
                }"/>
        <h2>Preguntas Opcionales</h2>
            <FormulateForm v-model="obligatorias.opcional" @submit.prevent="handleSubmit">
                <FormulateInput type="textarea" name="299001" label="299001" validation="max:500"
                :validation-messages="{
                    max: 'Tu retroalimentación es muy larga, máximo 500 caracteres'
                    }"/>
                <FormulateInput type="textarea" name="299002" label="299002" validation="max:500"
                :validation-messages="{
                    max: 'Tu retroalimentación es muy larga, máximo 500 caracteres'
                    }"/>
                <FormulateInput type="textarea" name="299003" label="299003" validation="max:500"
                :validation-messages="{
                    max: 'Tu retroalimentación es muy larga, máximo 500 caracteres'
                    }"/>
                <FormulateInput type="radio" name="299004" label="299004"
                :options="{1:'Si', 2:'No'}"/>
            </FormulateForm>
            <FormulateInput type="submit" label="Enviar Respuestas"/>
        </FormulateForm>
    </div>
</template>

<script>
export default {
    data: () => ({
        obligatorias: {
            opcional: {}
        }
        
    }),
    methods:{
        handleSubmit() {
        }
    }
};
</script>>