const consult_counter = `
SELECT SUM(b.qtd_item) as total_counter
FROM fat_nf_mestre a
JOIN fat_nf_item b
ON a.empresa = b.empresa
AND a.trans_nota_fiscal = b.trans_nota_fiscal
JOIN item c
ON b.empresa = c.cod_empresa
AND b.item = c.cod_item
JOIN item_man d
ON c.cod_empresa = d.cod_empresa
AND c.cod_item = d.cod_item
WHERE a.empresa = '01'
AND CAST(a.dat_hor_emissao AS DATE) >= '${process.env.INITIALDAY}'
AND d.cod_etapa = 'G'
AND c.ies_tip_item = 'F'
AND b.item IN ('20-000-00250D', '20-000-00397', '20-110-03414', '20-000-00401', '20-000-00403', '20-000-00196O', '20-000-00406', '20-000-00254D', '20-000-00253D', '20-000-00248D', '20-000-00238G', '20-000-00247D', '20-000-00239A', '20-000-00252D', '20-000-00426D', '20-000-00407', '20-000-00412', '20-000-00410', '20-000-00394A', '20-000-00404A', '20-000-00409', '20-000-00392C', '20-000-00406A', '20-000-00411', '20-000-00411A', '20-000-00418', '20-000-00417', '20-000-00420', '20-000-00414', '20-000-00251D', '20-000-00413', '20-000-00392D', '20-000-00415', '20-000-00421', '20-000-00404C', '20-000-00416', '20-000-00403A', '20-000-00397A', '20-000-00419', '20-000-00391', '20-000-00401C', '20-000-001960', '20-000-00404', '20-000-00238H', '20-000-00237C', '20-000-00405', '20-000-00230H', '20-000-00197P', '20-000-00209H', '20-000-00405A', '20-000-00249D', '20-000-00276C', '20-000-00388C', '20-000-00378C', '20-000-00389C', '20-000-00241', '20-000-00383', '20-000-00395', '20-000-00387', '20-000-00224', '20-000-00222', '20-000-00245')`;
const setIsolation = `SET ISOLATION TO DIRTY READ;`
module.exports = { consult_counter, setIsolation};
