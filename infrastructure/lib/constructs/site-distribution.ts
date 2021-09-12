import { Construct } from '@aws-cdk/core';
import { HostedZone } from '@aws-cdk/aws-route53';
import { IBucket } from "@aws-cdk/aws-s3";
import { CertificateValidation, DnsValidatedCertificate } from '@aws-cdk/aws-certificatemanager';
import { CloudFrontWebDistribution, SecurityPolicyProtocol, SSLMethod } from '@aws-cdk/aws-cloudfront';

import { DomainProps } from '../props/domain-props';

export interface SiteDistributionProps extends DomainProps {
    siteBucket: IBucket;
}

export class SiteDistribution extends Construct {
    public instance: CloudFrontWebDistribution;

    constructor(parent: Construct, id: string, props: SiteDistributionProps) {
        super(parent, id);
        
        const zone = HostedZone.fromLookup(this, 'Zone', { domainName: props.rootDomain });
        const domainName = props.subDomain ? `${props.subDomain}.${props.rootDomain}`: props.rootDomain;

        const certificate = new DnsValidatedCertificate(this, 'WebsiteCertificate', {
            domainName: domainName,
            validation: CertificateValidation.fromDns(),
            // subjectAlternativeNames: [domainName],
            hostedZone: zone,
            region: 'us-east-1'
        });

        this.instance = new CloudFrontWebDistribution(this, 'WebsiteDistribution', {
            aliasConfiguration: {
                acmCertRef: certificate.certificateArn,
                names: [ domainName ],
                sslMethod: SSLMethod.SNI,
                securityPolicy: SecurityPolicyProtocol.TLS_V1_1_2016,
            },
            originConfigs: [
                {
                    s3OriginSource: {
                        s3BucketSource: props.siteBucket
                    },
                    behaviors : [ {isDefaultBehavior: true}],
                }
            ]
        });
    }
}
