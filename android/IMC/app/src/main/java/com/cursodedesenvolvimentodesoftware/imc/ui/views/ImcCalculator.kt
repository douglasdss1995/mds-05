package com.cursodedesenvolvimentodesoftware.imc.ui.views

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
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

        OutlinedTextField(
            value = "",
            onValueChange = {},
            label = {
                Text(text = "Peso")
            }
        )

        OutlinedTextField(
            value = "",
            onValueChange = {},
            label = {
                Text(text = "Altura")
            }
        )

        Spacer(modifier = Modifier.height(10.dp))

        Button(
            onClick = {},
            modifier = Modifier.fillMaxWidth()
        ) {
            Text(text = "Calcular")
        }

    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    IMCTheme {
        ImcCalculator()
    }
}