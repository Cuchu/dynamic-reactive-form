export const dynamic = {
    name: {
        label: 'Name',
        value: null,
        type: 'text',
        validation: {
            required: true
        }
    },
    surname: {
        label: 'Surname',
        value: null,
        type: 'text',
        validation: {
            required: true
        }
    },
    email: {
        label: 'Email',
        value: null,
        type: 'email',
        validation: {
            required: true,
            email: true
        }
    },
    age: {
        label: 'Age',
        value: 32,
        type: 'number',
        validation: {
            min: 18,
            max: 50,
            required: true
        }
    },
    gender: {
        label: 'Gender',
        value: 'M',
        type: 'radio',
        options: [
            { label: "Male", value: 'M'},
            { label: "Female", value: 'F'},
            { label: "Indefined", value: 'I'}
        ]
    }, 
    city: {
        label: 'City',
        value: '2000',
        type: 'select',
        options: [
            { label: "(choose one)", value: ''},
            { label: "Rosario", value: '2000'},
            { label: "Nogoyá", value: '3150'},
            { label: "Santa Fe", value: '3000'}
        ],
        validation: {
            required: true
        }
    },
    extra: {
        key: 'extra',
        group: true,
        elements: [
            {
                key: 'hobby',
                label: 'Hobby',
                value: null,
                type: 'text'
            },{
                key: 'description',
                label: 'Description',
                value: null,
                type: 'text'
            }
        ]
    }
  }