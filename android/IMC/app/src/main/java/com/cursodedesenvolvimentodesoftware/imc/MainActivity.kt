package com.cursodedesenvolvimentodesoftware.imc

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.sp
import com.cursodedesenvolvimentodesoftware.imc.ui.theme.IMCTheme
import com.cursodedesenvolvimentodesoftware.imc.ui.theme.Primary
import com.cursodedesenvolvimentodesoftware.imc.ui.views.ImcCalculator

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            IMCTheme {
                Scaffold(
                    modifier = Modifier.fillMaxSize(),
                    topBar = {
                        Text(
                            text = "IMC Calculator",
                            color = Primary,
                            fontSize = 24.sp
                        )
                    }
                ) { innerPadding ->
                    ImcCalculator(
                        modifier = Modifier.padding(innerPadding)
                    )
                }
            }
        }
    }
}
