import React from 'react';
import { graphql, useMutation } from 'relay-hooks/lib';
import { EditPersonEditPersonMutation } from '/imports/ui/relay/example/__generated__/EditPersonEditPersonMutation.graphql';

export const EditPerson = () => {
  const [commitEditPerson] = useMutation<EditPersonEditPersonMutation>(graphql`
    mutation EditPersonEditPersonMutation($input: EditPersonInput!) {
        editPerson(input: $input) {
            result {
                id
                email
                name
            }
        }
    }
  `)

  return (
    <button onClick={() => {
      commitEditPerson({
        variables: {
          input: {
            id: '2',
            name: 'Radek'
          }
        },
        onCompleted: response => {
          // console.log(response);
        },
        onError: error => {
          console.log(error);
        }
      })
    }
    }>
    Edit person
    </button>
  )
}