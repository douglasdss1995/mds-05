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
            onClick = {},
            modifier = Modifier.fillMaxWidth()
        ) {
            Text(text = "Calcular")
        }

        Spacer(modifier = Modifier.height(10.dp))

        Text(
            text = imcResult.toString()
        )

    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    IMCTheme {
        ImcCalculator()
    }
}