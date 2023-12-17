export interface Square {
  name: string,
  backgroundColor: string,
  borderColor: string,
  isReadyToSave: boolean
}

export const squaresDefaultState: Square[] = [
    {
      name: 'square4',
      backgroundColor: '#4a4a48',
      borderColor: '#888 solid 2px',
      isReadyToSave: false
    },
    {
      name: 'square3',
      backgroundColor: '#4a4a48',
      borderColor: '#888 solid 2px',
      isReadyToSave: false
    },
    {
      name: 'square2',
      backgroundColor: '#4a4a48',
      borderColor: '#888 solid 2px',
      isReadyToSave: false
    },
    {
      name: 'square1',
      backgroundColor: '#4a4a48',
      borderColor: '#888 solid 2px',
      isReadyToSave: false
    }
  ];