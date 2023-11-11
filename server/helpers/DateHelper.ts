export default class DateHelper {
    /**
     * Calcula a diferença entre duas datas e retorna essa diferença em minutos.
     * A ordem de operação dos operandos é: x - y. Caso um valor não seja fornecido
     * para o parâmetro y, o dia de hoje será considerado.
     * @param x Date
     * @param y Date
     * @returns number
     */
    public static diff(x: Date, y: Date = new Date()): number {
        const diff = x.getMinutes() - y.getMinutes();
        return diff;
    }
    /**
     * Adiciona um determinado número de minutos a data.
     * @param x Date
     * @param minutes number
     * @returns Date
     */
    public static addMinutes(x: Date, minutes: number): Date {
        const resultMinutes = x.getMinutes() + minutes;
        x.setMinutes(resultMinutes);
        return x;
    }
}