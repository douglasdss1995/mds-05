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
import androidx.compose.ui.unit.dp


@Composable
fun ImcCalculator(modifier: Modifier = Modifier) {

    fun calcularIMC(
        peso: Double,
        alturaCm: Double
    ): Double {
        val alturaM = alturaCm / 100
        return peso / (alturaM * alturaM)
    }

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
            .padding(0.dp, 10.dp, 0.dp, 0.dp),

        verticalArrangement = Arrangement.Top,
        horizontalAlignment = Alignment.CenterHorizontally

    ) {

        var pesoInput by remember { mutableStateOf("") }
        var alturaInput by remember { mutableStateOf("") }
        var imcResult by remember { mutableStateOf<Double?>(null) }
        var resultadoTexto by remember { mutableStateOf("") }
        var focusManager = LocalFocusManager.current

        OutlinedTextField(
            value = pesoInput,
            onValueChange = {
                pesoInput = it.filter { char -> char.isDigit() || char in setOf('.', ',') }
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
                alturaInput = it.filter { char -> char.isDigit() || char in setOf('.', ',') }
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

                if (peso != null && altura != null && peso > 0 && altura > 0) {
                    val imc = calcularIMC(
                        peso,
                        altura
                    )
                    imcResult = imc
                } else {
                    imcResult = null

                    resultadoTexto = "Por favor, insira valores válidos"
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

