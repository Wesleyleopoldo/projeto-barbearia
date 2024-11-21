// Importando a função necessária do date-fns
import { format } from 'date-fns';

// Definindo a data que você deseja verificar
const date = new Date('2024-11-20');  // Exemplo de data

// Usando o format para obter o nome do dia da semana
const dayOfWeek = format(date, 'EEEE');  // 'EEEE' retorna o nome completo do dia

console.log(dayOfWeek);  // Vai exibir o nome do dia, por exemplo, 'Wednesday'
