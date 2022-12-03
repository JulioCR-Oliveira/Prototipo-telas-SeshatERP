var database = {
	setor: [{ 
			id: 1,
			nome: "Corte"
		},
		{ 
			id: 2,
			nome: "Costura e preparação"
		},
		{ 
			id: 3,
			nome: "Expedição"
		}],
	Cidade: [{
			id: 1
			nome: "Novo Hamburgo",
			estado: "RS"
		},
		{
			id: 2
			nome: "São Leopoldo",
			estado: "RS"
		}],
	Fornecedor: [{
			id: 1,
			nome: "Couros SA",
			cnpj: "XX.XXX.XXX/0001-XX",
			cidade: 1
		},
		{
			id: 2,
			nome: "Tintas Daboa",
			cnpj: "XX.XXX.XXX/0001-XX",
			cidade: 1
		},
		{
			id: 3,
			nome: "Kont Laminados",
			cnpj: "XX.XXX.XXX/0001-XX",
			cidade: 2
		},
		{
			id: 4,
			nome: "Granlinhas",
			cnpj: "XX.XXX.XXX/0001-XX",
			cidade: 1
		},
		{
			id: 1,
			nome: "Caixas Rervis",
			cnpj: "XX.XXX.XXX/0001-XX",
			cidade: 2		
		}],
	Material: [{
			id: 1,
			ref: "C57A11",
			fornecedor: 1,
			descricao: "Couro atanado",
			cor: "marrom",
			valor: 37.9,
			unid_medida: "m²",
			conv_unit: 1
		},
		{
			id: 2,
			ref: "C63K01",
			fornecedor: 1,
			descricao: "Couro camurça",
			cor: "preto",
			valor: 32.57,
			unid_medida: "m²",
			conv_unit: 1
		},
		{
			id: 3,
			ref: "C89F27",
			fornecedor: 1,
			descricao: "Raspa de couro",
			cor: "salmão",
			valor: 20.19,
			unid_medida: "m²",
			conv_unit: 1
		},
		{
			id: 4,
			ref: "DB0158",
			fornecedor: 2,
			descricao: "Tinta base da água",
			cor: "preta",
			valor: 26,8,
			unid_medida: "lata",
			conv_unit: 3
		},
		{
			id: 5,
			ref: "DB0113",
			fornecedor: 2,
			descricao: "Tinta base da água",
			cor: "bege",
			valor: 29,8,
			unid_medida: "lata",
			conv_unit: 3
		},
		{
			id: 6,
			ref: "DB7019",
			fornecedor: 2,
			descricao: "Tinta base de solvente",
			cor: "preto",
			valor: 57,9,
			unid_medida: "lata",
			conv_unit: 5
		},
		{
			id: 7,
			ref: "LSK569",
			fornecedor: 3,
			descricao: "Laminado sintético",
			cor: "preto",
			valor: 14,9,
			unid_medida: "ml",
			conv_unit: 1,2
		},
		{
			id: 8,
			ref: "LSF358",
			fornecedor: 3,
			descricao: "Laminado sintético",
			cor: "marrom",
			valor: 16,9,
			unid_medida: "ml",
			conv_unit: 1,2
		},
		{
			id: 9,
			ref: "LSC847",
			fornecedor: 3,
			descricao: "Laminado sintético",
			cor: "azul",
			valor: 16,9,
			unid_medida: "ml",
			conv_unit: 1,2
		},
		{
			id: 10,
			ref: "01F58T6",
			fornecedor: 4,
			descricao: "Linha",
			cor: "branca",
			valor: 34,9,
			unid_medida: "rolo",
			conv_unit: 100
		},
		{
			id: 11,
			ref: "01F26T6",
			fornecedor: 4,
			descricao: "Linha",
			cor: "preta",
			valor: 34,9,
			unid_medida: "rolo",
			conv_unit: 100
		},
		{
			id: 12,
			ref: "01F12T6",
			fornecedor: 4,
			descricao: "Linha",
			cor: "bege",
			valor: 34,9,
			unid_medida: "rolo",
			conv_unit: 100
		},
		{
			id: 13,
			ref: "CX4FT",
			fornecedor: 5,
			descricao: "Caixa 30cmX13cmX10cm",
			cor: "marrom",
			valor: 67,9,
			unid_medida: "grosa",
			conv_unit: 144
		}],
	Tipo_produto: [{
			id: 1,
			nome: "Calçado"
		},
		{
			id: 2,
			nome: "Bolsa"
		}],
	
}