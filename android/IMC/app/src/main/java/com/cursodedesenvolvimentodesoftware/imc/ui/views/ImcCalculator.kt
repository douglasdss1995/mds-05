package com.cursodedesenvolvimentodesoftware.imc.ui.views

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.cursodedesenvolvimentodesoftware.imc.ui.theme.IMCTheme


@Composable
fun ImcCalculator(
    modifier: Modifier = Modifier
) {

    /**
     * Calcula o Índice de Massa Corporal (IMC).
     *
     * @param peso O peso da pessoa em quilogramas (kg).
     * @param alturaCm A altura da pessoa em centímetros (cm).
     * @return O valor do IMC calculado.
     */
    fun calcularIMC(
        peso: Double,
        alturaCm: Double
    ): Double {
        val alturaM = alturaCm / 100 // Converte altura de cm para metros.
        return peso / (alturaM * alturaM) // Fórmula do IMC: peso / (altura_em_metros)^2.
    }

    /**
     * Classifica o IMC de acordo com as faixas padrão.
     *
     * @param imc O valor do IMC a ser classificado.
     * @return Uma string descrevendo a classificação do IMC (e.g., "Peso normal", "Sobrepeso").
     */
    fun classificarIMC(imc: Double): String {
        return when {
            imc < 18.5 -> "Abaixo do peso"
            imc < 24.9 -> "Peso normal"
            imc < 29.9 -> "Sobrepeso"
            else -> "Obesidade"
        }
    }

    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(
                0.dp,
                10.dp,
                0.dp,
                0.dp
            ),
        verticalArrangement = Arrangement.Top,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Estado para armazenar o valor do campo de texto do peso.
        var pesoInput by remember { mutableStateOf("") }
        // Estado para armazenar o valor do campo de texto da altura.
        var alturaInput by remember { mutableStateOf("") }
        // Estado para armazenar o resultado do cálculo do IMC
        // (pode ser nulo se a entrada for inválida).
        var imcResult by remember { mutableStateOf<Double?>(null) }
        // Estado para armazenar o texto da classificação do
        // IMC ou mensagens de erro.
        var resultadoTexto by remember { mutableStateOf("") }
        // Gerenciador de foco para controlar o teclado virtual.
        val focusManager = LocalFocusManager.current

        OutlinedTextField(
            value = pesoInput,
            onValueChange = {
                pesoInput = it.filter { char ->
                    char.isDigit() || char in setOf(
                        '.',
                        ','
                    )
                }
            },
            label = {
                Text(text = "Peso")
            },
            modifier = Modifier.fillMaxWidth(),
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
        )

        OutlinedTextField(
            value = alturaInput,
            onValueChange = {
                alturaInput = it.filter { char -> char.isDigit() || char == '.' }
            },
            label = {
                Text(text = "Altura")
            },
            modifier = Modifier.fillMaxWidth(),
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
        )

        Spacer(modifier = Modifier.height(10.dp))

        Button(
            onClick = {
                val peso = pesoInput.toDoubleOrNull()
                val altura = alturaInput.toDoubleOrNull()

                // Verifica se os valores de peso e altura são válidos.
                if (peso != null && altura != null && peso > 0 && altura > 0) {
                    val imc = calcularIMC(
                        peso,
                        altura
                    )
                    imcResult = imc // Armazena o resultado do IMC.
                    resultadoTexto = classificarIMC(imc) // Armazena a classificação do IMC.
                } else {
                    imcResult = null // Reseta o resultado do IMC.
                    // Define mensagem de erro.
                    resultadoTexto = "Por favor, insira valores válidos."
                }
            },
            modifier = Modifier.fillMaxWidth()
        ) {
            Text(text = "Calcular")
        }

        Spacer(modifier = Modifier.height(10.dp))

        Text(text = resultadoTexto)

    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    IMCTheme {
        ImcCalculator()
    }
}