function ResultMetodology () {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Общее количество баллов</th>
                        <th>Уровень риска СД 2 типа</th>
                        <th>Вероятность развития СД 2 типа</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Менее 7</td>
                        <td>Низкий риск</td>
                        <td>1 из 100 или 1%</td>
                    </tr>
                    <tr>
                        <td>7–11</td>
                        <td>Слегка повышен</td>
                        <td>1 из 25 или 4%</td>
                    </tr>
                    <tr>
                        <td>12–14</td>
                        <td>Умеренный</td>
                        <td>1 из 6 или 17%</td>
                    </tr>
                    <tr>
                        <td>15–20</td>
                        <td>Высокий</td>
                        <td>1 из 3 или 33%</td>
                    </tr>
                    <tr>
                        <td>Более 20</td>
                        <td>Очень высокий</td>
                        <td>1 из 2 или 50%</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ResultMetodology
